with open('scratch/pdf_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pages = text.split('--- PAGE ')
for p in pages:
    if not p.strip():
        continue
    p_num = p.split(' ---')[0]
    lines = [l.strip() for l in p.split('\n') if l.strip()]
    print(f"\n=================== PAGE {p_num} ===================")
    for l in lines[1:25]:  # show first 25 lines
        print(f"  {l}")
