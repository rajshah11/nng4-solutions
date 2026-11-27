# LessOrEqual

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
use 0
rw [add_zero]
rfl
```

## Level 2

```lean
use x
rw [zero_add]
rfl
```

## Level 3

```lean
use 1
exact succ_eq_add_one x
```

## Level 4

```lean
cases hxy with a ha
cases hyz with b hb
rw [ha] at hb
use (a+b)
rw [← add_assoc]
exact hb
```

## Level 5

```lean
cases hx with a ha
symm at ha
apply add_right_eq_zero at ha
exact ha
```

## Level 6

```lean
cases hxy with a ha
cases hyx with b hb
rw [hb] at ha
symm at ha
rw [add_assoc] at ha
apply add_right_eq_self at ha
apply add_right_eq_zero at ha
rw [ha] at hb
rw [add_zero] at hb
exact hb
```

## Level 7

```lean
cases h with hx hy
right
exact hx
left
exact hy
```

## Level 8

```lean
induction y with d hd
right
exact zero_le x
cases hd with h1 h2
left
cases h1 with e he
use (e+1)
rw [he]
rw [succ_eq_add_one]
rw [add_assoc x e 1]
rfl
cases h2 with e he
induction e with y hy
rw [add_zero] at he
left
rw [he]
exact le_succ_self d
right
use y
rw [succ_eq_add_one]
rw [succ_eq_add_one] at he
rw [add_assoc]
rw [add_comm 1]
exact he
```

## Level 9

```lean
cases hx with a ha
rw [succ_add] at ha
apply succ_inj at ha
use a
exact ha
```

## Level 10

```lean
cases x with y
left
rfl
rw [one_eq_succ_zero] at hx ⊢
apply succ_le_succ at hx
apply le_zero at hx
rw [hx]
right
rfl
```

## Level 11

```lean
cases x with a ha
left
rfl
rw [two_eq_succ_one] at hx
apply succ_le_succ at hx
apply le_one at hx
cases hx with hx1 hx2
right
left
rw [hx1]
rw [one_eq_succ_zero]
rfl
right
right
rw [hx2]
rw [two_eq_succ_one]
rfl
```
