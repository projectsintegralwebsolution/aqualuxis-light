def match_wattage(variant_wattage, spec_wattage, target_w):
    # target_w e.g. "9W" or "9 Watt"
    # extract number e.g. 9
    import re
    m = re.search(r'(\d+)', target_w)
    if not m:
        return target_w.lower() in variant_wattage.lower() or target_w.lower() in spec_wattage.lower()
    num = m.group(1)
    # search for number with word boundary or W or Watt
    pattern = rf'(?:^|[^\d]){num}\s*(?:w|watt)?(?:[^\d]|$)'
    text = (variant_wattage + ' ' + spec_wattage).lower()
    return bool(re.search(pattern, text))

print("Testing 9W on '3 Watt / 9 Watt':", match_wattage('3 Watt / 9 Watt', '', '9W'))
print("Testing 9W on '18 Watt':", match_wattage('18 Watt', '', '9W'))
print("Testing 3W on '1*3= 3 WATT':", match_wattage('1*3= 3 WATT', '', '3W'))
print("Testing 54W on 'Up to 54 Watt':", match_wattage('Up to 54 Watt', '', '54W'))
