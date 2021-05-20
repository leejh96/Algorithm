# 재귀함수 (recursive function)
# 자기 자신을 호출 하는 것을 말함
# 탈출조건이 꼭 들어가야 함
def sum1(array, result):
    if not array:
        return result
    last = array.pop()
    result += last
    return sum1(array, result)

arr = [7,3,2,9]
answer = sum1(arr, 0)

print(answer)