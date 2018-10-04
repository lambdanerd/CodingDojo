class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

    def __str__(self):
        return f'Value: {self.value}, Prev: {self.prev}, Next: {self.next}'


class DList:
    def __init__(self):
        self.head = None

    def add_head(self, value):
        if self.head is None:
            node = Node(value)
            node.prev = None
            self.head = node
        else:
            node = Node(value)
            self.head.prev = node
            node.prev = None
            node.next = self.head
            self.head = node
        return self

    def add_tail(self, value):
        if self.head is None:
            node = Node(value)
            node.prev = None
            self.head = node
        else:
            node = Node(value)
            runner = self.head
            while runner.next is not None:
                runner = runner.next
            runner.next = node
            node.prev = runner
            node.next = None
        return self

    def print_list(self):
        runner = self.head
        while runner:
            print(runner.value)
            runner = runner.next
        print('\n')
        return self

# TODO: implelment the middle of the DList thingy and other stuff at the end of the assignment
