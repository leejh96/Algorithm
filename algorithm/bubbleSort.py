# 버블정렬
# 리스트의 인덱스를 n이라 할 때
# 1. n과 n+1을 비교하여 n+1이 더 작으면 n과 자리를 바꾼다.
# 2. n과 n+2를 비교하여 n+2이 더 작으면 n과 자리를 바꾼다.
# 3. n과 n+3를 비교하여 n+3이 더 작으면 n과 자리를 바꾼다.
# 4. 이 과정을 리스트 끝까지 반복

numbers = [7, 3, 2, 9, 0, 5, 3, 7, 6]
def bubbleSort(array):
    for idx in range(len(array)-1):
        for i in range(idx+1, len(array)):
            if array[idx] > array[i]:
                temp = array[idx]
                array[idx] = array[i]
                array[i] = temp
    return array
print(bubbleSort(numbers))


