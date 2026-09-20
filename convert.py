from PIL import Image

img = Image.open('public/icones/logo-navbar.png').convert('RGBA')
data = img.getdata()

new_data = []
for item in data:
    # item is (R, G, B, A)
    if item[3] > 0:
        # Distinguish the blue part from the greyscale text part
        # Blue part has high Blue channel compared to Red
        if item[2] > 100 and item[2] > item[0] + 30:
            new_data.append(item) # Keep blue pixel
        else:
            # Convert non-blue pixel (text) to white, keep original alpha for smooth edges
            new_data.append((255, 255, 255, item[3]))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('public/icones/logo-navbar-white.png')
print("Image saved successfully.")
