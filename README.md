# DDD Study with React

This project implements a **Booking Hotel** application.

## Business Description

Beach Hotel is a big hotel that needs to automate its **reservation**
system. A **guest** can **reserve** a room, a **reservation** needs to have a
**check-in**/**check-out** date.

### Rooms

**Rooms** have the **apartment** number.

- **Roof** is the apartment number **1**
- **Suites** is in the range **2**-**6**
- **Regular** is in the range **7**-**31**

### Pricing

Rooms have different daily rate based on room types:

- **Roof**: $835/day - 1 available
- **Suites**: $515/day - 5 available
- **Regular**: 200/day - 25 available

#### Discount Policy

**Guests** can receive a **discount** based on how long their **stay** will be.

- > **7 days** 10% discount
- > **14 days** 15% discount
- > **30 days** 20% discount

#### Overpricing

When the Hotel have **80%** of **rooms** reserved, the all rooms are **overpricing**
in **20%**.