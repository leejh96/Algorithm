word = "asdfasdfaaaa"
def highFrequencyLetterCount(countWord):
    dic = {}
    maxValue = 0
    for alphabet in countWord:
        if not dic.get(alphabet):
            dic[alphabet] = 1
        else:
            dic[alphabet] += 1
    for key in dic:
        if dic[key] > maxValue:
            maxValue = dic[key]
    return maxValue

print(highFrequencyLetterCount(word))