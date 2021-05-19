#기준점(pivot)을 잡고 더 작으면 왼쪽 크면 오른쪽으로 저장하는 방법
numbers = [40, 35, 27, 75, 50]
def quickSort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [number for number in array[1:] if number <= pivot]
        greater = [number for number in array[1:] if number > pivot]
        return quickSort(less) + [pivot] + quickSort(greater)
result = quickSort(numbers)
print(result)