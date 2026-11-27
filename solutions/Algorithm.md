# Algorithm

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
rw [add_comm b (a+c)]
rw [add_right_comm]
rw [add_assoc]
rfl
```

## Level 2

```lean
repeat rw [add_assoc]
rw [add_left_comm b c]
rw [add_comm b d]
rfl
```

## Level 3

```lean
simp [add_left_comm, add_comm]
```

## Level 4

```lean
simp_add
```

## Level 5

```lean
rw [← pred_succ a]
rw [← pred_succ b]
rw [h]
rfl
```

## Level 6

```lean
intro h
rw [← is_zero_succ a]
rw[h]
rw [is_zero_zero]
trivial
```

## Level 7

```lean
contrapose! h
apply succ_inj at h
exact h
```

## Level 8

```lean
decide
```

## Level 9

```lean
decide
```
