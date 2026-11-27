# Power

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
rw[pow_zero]
rfl
```

## Level 2

```lean
rw[pow_succ, mul_zero]
rfl
```

## Level 3

```lean
rw [one_eq_succ_zero]
rw [pow_succ]
rw[pow_zero]
rw [one_mul]
rfl
```

## Level 4

```lean
induction m with d hd
rw [pow_zero]
rfl
rw [pow_succ]
rw[hd]
rw[one_mul]
rfl
```

## Level 5

```lean
rw [two_eq_succ_one]
rw [pow_succ]
rw [one_eq_succ_zero]
rw [pow_succ]
rw [pow_zero, one_mul]
rfl
```

## Level 6

```lean
induction m with d hd
rw [zero_add, pow_zero, one_mul]
rfl
rw[succ_add]
rw[pow_succ]
rw [hd]
rw [pow_succ]
rw [mul_assoc (a^d)]
rw [mul_comm (a^n)]
rw [← mul_assoc (a^d)]
rfl
```

## Level 7

```lean
induction n with d hd
repeat rw [pow_zero]
rw [one_mul]
rfl
repeat rw [pow_succ]
rw [hd]
rw [mul_assoc]
rw [mul_comm (b^d)]
rw [← mul_assoc]
nth_rewrite 1 [mul_assoc]
rw [mul_assoc a]
rw [mul_comm b]
rw [← mul_assoc (a^d)]
rfl
```

## Level 8

```lean
induction n with d hd
rw [mul_zero, pow_zero, pow_zero]
rfl
rw [pow_succ, mul_succ, pow_add]
rw[hd]
rfl
```

## Level 9

```lean
rw [pow_two]
rw [mul_add]
rw [add_mul]
rw [add_mul]
rw [← add_assoc]
rw [mul_comm b]
repeat rw [← pow_two]
rw [add_assoc (a^2)]
rw [← two_mul]
rw [← mul_assoc]
rw [add_right_comm]
rfl
```
