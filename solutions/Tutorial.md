# Tutorial

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
rfl
```

## Level 2

```lean
rw [h]
rfl
```

## Level 3

```lean
rw [two_eq_succ_one]
rw [← one_eq_succ_zero]
rfl
```

## Level 4

```lean
rw [← one_eq_succ_zero]
rw [← two_eq_succ_one]
rfl
```

## Level 5

```lean
repeat rw [add_zero]
rfl
```

## Level 6

```lean
rw [add_zero c]
nth_rewrite 1 [add_zero]
rfl
```

## Level 7

```lean
rw [one_eq_succ_zero]
rw [add_succ]
rw [add_zero]
rfl
```

## Level 8

```lean
nth_rewrite 2 [two_eq_succ_one] -- only change the second `2` to `succ 1`.
rw [add_succ]
rw [one_eq_succ_zero]
rw [add_succ, add_zero] -- two rewrites at once
rw [← three_eq_succ_two] -- change `succ 2` to `3`
rw [← four_eq_succ_three]
rfl
```
