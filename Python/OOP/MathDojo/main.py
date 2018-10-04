class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, *args):
        for number in args:
            self.result += number
        return self

    def sub(self, *args):
        for number in args:
            self.result -= number
        return self

    def __str__(self):
        return f'{self.result}'


def main():
    x = MathDojo()
    x.add(2).add(2, 5, 1).sub(3, 2)
    print(x)


if __name__ == '__main__':
    main()
