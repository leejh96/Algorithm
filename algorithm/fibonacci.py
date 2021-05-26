# 재귀 방법
# fib(n) = fib(n-1) + fib(n-2)
# def fib(n):
#     if n <= 1:
#         return n
#     return fib(n-1) + fib(n-2)
# print(fib(2))

# 반복문 방법
# def fib_repeat(n):
#     result = []
#     for i in range(n):
#         if i < 2:
#             result.append(1)
#         else:
#             result.append(result[i-2] + result[i - 1])
#     return result
# print(fib_repeat(100))

# 다이나믹 프로그래밍
# 메모이제이션(함수 호출의 결과값을 메모)
def fib_dynamic(num, arr):
    num -= 1
    if num <= 1:
        arr[num] = 1
        return arr[num]
    # arr[num]이 None일 경우
    if arr[num] is None:
        arr[num] = fib_dynamic(num - 1, arr) + fib_dynamic(num, arr)
    print(arr)
    return arr[num]
n= 10
lookup = [None] * n
print(fib_dynamic(n, lookup))