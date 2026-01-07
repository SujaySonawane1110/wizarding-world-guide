import re

# Fix paths in magic.html
magic_file = r'd:\html\main\magic.html'
with open(magic_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all absolute paths with relative paths
content = re.sub(r'D:\\html\\main\\images\\', 'images/', content)

with open(magic_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed magic.html")
