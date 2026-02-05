# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. Composition — A car has an engine, meaning the engine is a separate object that the car is composed of.
2. Inheritance — A dog is an animal, so Dog would extend Animal.
3. Composition — A classroom has many students, so it is composed of Student objects.
4. Inheritance — A rectangle is a shape, so Rectangle would extend Shape.
5. Composition — A computer has a CPU, so it is composed of a CPU object.
6. Inheritance — A manager is an employee, so Manager would extend Employee.

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

**Polymorphism** means that different **classes** can share the same **method** name but provide their own specific implementation. In the `MediaItem` example, `Song`, `Podcast`, and `Audiobook` all implement their own version of `play()`, but they can all be treated as `MediaItem` objects.

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) An **instance property** belongs to a specific `object` created from a `class`, while a **static property** belongs to the `class` itself and is shared across all instances. Instance properties are accessed through the `object`, while static properties are accessed through the `class`.

b) A **static method** is useful for utility or helper functionality that does not depend on a specific instance, such as a method or a class-wide counter. For example, a **static method** could calculate the total number of `MediaItem` objects created without needing a specific `MediaItem` instance.