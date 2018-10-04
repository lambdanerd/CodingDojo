class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f'Value: {self.value}, Next: {self.next}'


# node1 = Node(9)
# node2 = Node(11)
# node3 = Node(27)
# print(node1.value)  # => 9

# node1.next = node2
# node2.next = node3

# node4 = Node(71)

# node3.next = node4

# node3.next = None


class SList:
    def __init__(self):
        self.head = None

    def addNode(self, value):
        if self.head is None:
            node = Node(value)
            self.head = node
            return self
        else:
            node = Node(value)
            runner = self.head
            while runner.next is not None:
                runner = runner.next
            runner.next = node
            return self

    def removeLast(self):
        if self.head is None:
            return self
        else:
            runner = self.head
            while runner.next.next is not None:
                runner = runner.next
            runner.next = None
            return self

    def removeNode(self, value):
        if self.head.value is value:
            self.head = self.head.next
            return self
        runner = self.head
        while runner.next is not None:
            if runner.next.value is value:
                runner.next = runner.next.next
                return self
            runner = runner.next
        return self

    def length(self):
        count = 0
        runner = self.head
        while runner is not None:
            count += 1
            runner = runner.next
        return count

    def printAllValues(self, msg=''):
        runner = self.head
        print(f'\n\nhead points to {id(self.head)}')
        print(f'Printing the values in the list ---{msg}---')
        while runner.next is not None:
            print(id(runner), runner.value, id(runner.next))
            runner = runner.next
        print(id(runner), runner.value, id(runner.next))
