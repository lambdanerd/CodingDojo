from random import randrange


def rand_int(min=0, max=100, *args, **kwargs):
    return randrange(min, max + 1)


def main():
    print(rand_int())
    print(rand_int(max=50))
    print(rand_int(min=50))
    print(rand_int(min=50, max=500))


if __name__ == '__main__':
    main()
