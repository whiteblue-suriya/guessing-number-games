import random

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 to 100.")

sceret_number = random.randint(0, 100)

for i in range(1,8):
    try:
        user_input = int(input("make a guess number :"))

        if user_input < 1 or user_input > 100:
            print("Please enter a number within the range of 1 to 100.")
            continue
        if user_input > sceret_number:
            print("your guess number Too high.")
        elif user_input < sceret_number:
            print("your guess number Too low.")
        else:
            print(f"Congratulations! You've guessed the number {sceret_number} in {i} attemt correctly!")
            break
    except ValueError:
        print("Invalid input. Please enter a number between 1 to 100 .")
    
if sceret_number == user_input:
        print("your guess number is correct.")
else:
        print("sorry!, you've used all your attempts. please try again.")
