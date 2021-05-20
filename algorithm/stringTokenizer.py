string = "13+3*{24*(35-46.76)-89}"
deli = "+-*/(){}[]^"
def stringTokenizer(s, delimiter):
    result = []
    acc = ""
    for char in s:
        if char in delimiter:
            if acc != "":
                result.append(acc)
                acc = ""
            result.append(char)
        else:
            acc += char
    return result

print(stringTokenizer(string , deli))