# 이진탐색 O(log N)
# 탐색범위를 절반씩 줄여나가면서 찾는다.
# 정렬이 되어 있어야 한다.
# 중간 인덱스를 구하고 구하고자 하는 값이 중간 값보다 크다면
# 구하고자 하는 값보다 작은 값은 반복하지 않고 버린다.

arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11]

def binarySearch(array, targetNumber, startIdx, endIdx):
    midIdx = (startIdx + endIdx) // 2
    idxVal = array[midIdx]
    if idxVal == targetNumber:
        return midIdx
    elif idxVal > targetNumber:
        endIdx = midIdx-1
    else:
        startIdx = midIdx + 1
    return binarySearch(array, targetNumber, startIdx, endIdx)

print(binarySearch(arr, 2, 0, len(arr)-1))