"""Build extra, uncropped WebP display assets without changing the JPEG masters."""
import json
import os
import sys
from PIL import Image, ImageOps

with open(sys.argv[1], encoding='utf-8') as catalog_file:
    catalog = json.load(catalog_file)
output = 'dist/client/assets/card-previews'
os.makedirs(output, exist_ok=True)
manifest = {}
for work in catalog:
    source = work['image']
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        widths = (160, 320, 480, 960, 1440) if work['category'] == 'paper' else (480, 960, 1440)
        variants = []
        for requested in widths:
            width = min(requested, image.width)
            if variants and variants[-1][0] == width:
                continue
            height = max(1, round(image.height * width / image.width))
            filename = f"{os.path.splitext(os.path.basename(source))[0]}-{width}.webp"
            destination = os.path.join(output, filename)
            temporary = destination + '.tmp'
            image.resize((width, height), Image.Resampling.LANCZOS).save(
                temporary, 'WEBP', quality=88, method=5
            )
            os.replace(temporary, destination)
            if not os.path.getsize(destination):
                raise RuntimeError(f'Empty generated preview: {destination}')
            variants.append([width, '/assets/card-previews/' + filename])
        manifest[source] = variants
json.dump(manifest, sys.stdout, separators=(',', ':'))
