# AdvMultiplication

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
cases h with d hd
use d*t
rw [← add_mul, hd]
rfl
```

## Level 2

```lean
contrapose! h
rw [h, mul_zero]
rfl
```

## Level 3

```lean
cases a with d
tauto
tauto
```

## Level 4

```lean
cases a with d
tauto
rw [one_eq_succ_zero]
use d
rw [succ_add, zero_add]
rfl
```

## Level 5

```lean
apply mul_left_ne_zero at h
apply one_le_of_ne_zero at h
apply mul_le_mul_right 1 b a at h
rw [one_mul] at h
rw [mul_comm] at h
exact h
```

## Level 6

```lean
have h2: x*y ≠ 0
rw [h]
rw [one_eq_succ_zero]
exact succ_ne_zero 0
apply le_mul_right at h2
rw [h] at h2
apply le_one at h2
cases h2 with h0 h1
rw [h0, zero_mul] at h
tauto
exact h1
```

## Level 7

```lean
apply eq_succ_of_ne_zero at ha
apply eq_succ_of_ne_zero at hb
cases ha with a1 ha1
cases hb with b1 hb1
rw [ha1, hb1, succ_mul, mul_succ, succ_eq_add_one, ← add_assoc, ← succ_eq_add_one]
exact succ_ne_zero (a1*b1+a1+b1)
```

## Level 8

```lean
have h2 := mul_ne_zero a b
tauto
```

## Level 9

```lean
induction b with d hd generalizing c
rw [mul_zero] at h
symm at h
apply mul_eq_zero at h
cases h with hd
tauto
symm
exact h_1
cases c with e
rw [mul_zero] at h
apply mul_eq_zero at h
cases h with hg
tauto
exact h_1
repeat rw [mul_succ] at h
apply add_right_cancel at h
apply hd at h
repeat rw [succ_eq_add_one]
rw [h]
rfl
```

## Level 10

```lean
nth_rewrite 2 [← mul_one a] at h
apply mul_left_cancel at h
exact h
apply mul_left_cancel at h
exact ha
exact ha
```
