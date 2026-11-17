with open('scratch/pdf_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pages = text.split('=== PAGE ')
for p in pages:
    if not p.strip():
        continue
    p_num_str = p.split(' ===')[0].strip()
    if not p_num_str.isdigit():
        continue
    p_num = int(p_num_str)
    if 10 <= p_num <= 24:
        print(f"\n=================== PAGE {p_num} ===================")
        lines = [l.strip() for l in p.split('\n') if l.strip()]
        for l in lines[1:]:
            print(f"  {l}")
