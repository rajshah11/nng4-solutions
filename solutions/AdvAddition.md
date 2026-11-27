# AdvAddition

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
induction n with d hd
intro hx
repeat rw [add_zero] at hx
exact hx
repeat rw [add_succ]
intro hx
apply succ_inj at hx
apply hd at hx
exact hx
```

## Level 2

```lean
rw [add_comm n a, add_comm n b]
exact add_right_cancel a b n
```

## Level 3

```lean
nth_rewrite 2 [← zero_add y]
exact add_right_cancel x 0 y
```

## Level 4

```lean
nth_rewrite 2 [← add_zero x]
exact add_left_cancel y 0 x
```

## Level 5

```lean
cases b with d
exact add_left_eq_self a 0
rw [add_succ]
contrapose!
intro h
exact succ_ne_zero (a+d)
```

## Level 6

```lean
intro h
rw [add_comm] at h
apply add_right_eq_zero at h
exact h
```
