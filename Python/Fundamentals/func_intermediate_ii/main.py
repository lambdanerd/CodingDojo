# 1.

x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]


# 2.

more_students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterate_dictionary(list_of_dict):
    for dictionary in list_of_dict:
        for key, value in dictionary.items():
            print(f'{key} - {value}, ')


# 3.

def iterate_dictionary_with_key(key, list_of_dict):
    for dictionary in list_of_dict:
        print(dictionary.get(key))


# 4.

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def print_dojo_info(dojo):
    locations = dojo['locations']
    instructors = dojo['instructors']

    print(f'\n{len(locations)} LOCATIONS')
    for location in locations:
        print(location)

    print(f'\n{len(instructors)} INSTRUCTORS')
    for instructor in instructors:
        print(instructor)


def main():
    print(x)
    x[1][0] = 15
    print(x)

    print(students)
    students[0]['last_name'] = 'Bryant'
    print(students)

    print(sports_directory)
    sports_directory['soccer'][0] = 'Andres'
    print(sports_directory)

    print(z)
    z[0]['y'] = 30
    print(z)

    iterate_dictionary(more_students)

    iterate_dictionary_with_key('first_name', more_students)

    print_dojo_info(dojo)


if __name__ == '__main__':
    main()
