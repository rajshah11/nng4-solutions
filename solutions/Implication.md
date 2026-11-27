# Implication

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
exact h1
```

## Level 2

```lean
repeat rw [zero_add] at h
exact h
```

## Level 3

```lean
apply h2 at h1
exact h1
```

## Level 4

```lean
rw [← succ_eq_add_one, four_eq_succ_three] at h
apply succ_inj at h
exact h
```

## Level 5

```lean
apply succ_inj
rw [succ_eq_add_one, ← four_eq_succ_three]
exact h
```

## Level 6

```lean
intro h
exact h
```

## Level 7

```lean
intro h
apply succ_inj
repeat rw [succ_eq_add_one]
exact h
```

## Level 8

```lean
apply h2 at h1
exact h1
```

## Level 9

```lean
intro h
rw [one_eq_succ_zero] at h
apply zero_ne_succ at h
exact h
```

## Level 10

```lean
symm
exact zero_ne_one
```

## Level 11

```lean
intro h
repeat rw [succ_add] at h
repeat apply succ_inj at h
rw [zero_add] at h
repeat apply succ_inj at h
apply zero_ne_succ at h
exact h
```
