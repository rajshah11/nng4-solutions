# Multiplication

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
rw [one_eq_succ_zero, mul_succ, mul_zero, zero_add]
rfl
```

## Level 2

```lean
induction m with d hd
rw[mul_zero]
rfl
rw [mul_succ]
rw [hd]
rw[zero_add]
rfl
```

## Level 3

```lean
induction b with d hd
rw [add_zero]
repeat rw [mul_zero]
rfl
rw [mul_succ]
rw [hd]
rw [add_right_comm]
rw [succ_eq_add_one]
rw [← add_assoc]
rw [← mul_succ]
rw [add_assoc]
rw [add_comm 1 d]
rw [← succ_eq_add_one]
rfl
```

## Level 4

```lean
induction b with d hd
rw [mul_zero, zero_mul]
rfl
rw[mul_succ]
rw[hd]
rw[succ_mul]
rfl
```

## Level 5

```lean
rw [mul_comm, mul_one]
rfl
```

## Level 6

```lean
rw [two_eq_succ_one, succ_mul, one_mul]
rfl
```

## Level 7

```lean
induction c with d hd
rw [add_zero, mul_zero, add_zero]
rfl
rw [add_succ, mul_succ, hd, mul_succ, add_assoc]
rfl```

## Level 8

```lean
rw [mul_comm, mul_add]
repeat rw [mul_comm c]
rfl```

## Level 9

```lean
induction c with d hd
repeat rw[mul_zero]
rfl
rw[mul_succ]
rw[mul_succ]
rw[mul_add]
rw[hd]
rfl
```
