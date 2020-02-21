def stringy_string(str, n):
    result = ""
    for i in range(n):
        result = result + str
    print(result)


stringy_string('Hello', 2)

letters = ['A', 'B', 'C']
# [print(each_element) for each_element in letters]

for i in range(len(letters)):
    print('Letter {}: {}'.format(i + 1, letters[i]))


# def front_times(str, n):
#     front_len = 3
#     if front_len > len(str):
#         front_len = len(str)
#     front = str[:front_len]
#
#     result = ""
#     for i in range(n):
#         result = result + front
#     return result

def every_other_string(str):
    # initialize result variable so that i can do something with it
    result = ""
    # for each_element in the range of the length of the string
    # each_element modulo 2 means every other string (even number)
    for each_element in range(len(str)):
        if each_element % 2 == 0:
            result = result + str[each_element]
        print(result)


every_other_string("Dekevion")


def string_explosion(str):
    result = ""
    for each_element in range(len(str)):
        result = result + str[:each_element + 1]
    print(result)


string_explosion('code')


def front_times(str, n):
    front = 3
    if front > len(str):
        front = len(str)
    front = str[:front]
    result = ""
    for i in range(n):
        result = result + front
    print(result)


front_times('Chocolate', 2)


def make_tags(tag, word):
    print(f"<{tag}>{word}<{tag}>")


make_tags("i", "me")

list = [1, 2, 3, 4]

if len(list) > 1 and list[0] == list[-1]:
    print(True)
else:
    print(False)


def solution(A):
    n = len(A)
    result = 0
    for i in range(n - 1):
        if (A[i] == A[i + 1]):
            result = result + 1
    r = 0
    for i in range(n):
        count = 0
        if (i > 0):
            if (A[i - 1] != A[i]):
                count = count + 1
            else:
                count = count - 1
        if (i < n - 1):
            if (A[i + 1] != A[i]):
                count = count + 1
            else:
                count = count - 1
        r = max(r, count)
    print (result + r)
solution([0,0,0,1,0,0])