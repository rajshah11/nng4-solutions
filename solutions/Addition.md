# Addition

Tactics recorded during a first playthrough of the Numbers Game.

## Level 1

```lean
induction n with d hd
rw [add_zero]
rfl
rw [add_succ]
rw [hd]
rfl
```

## Level 2

```lean
induction b with d hd
repeat rw [add_zero]
rfl
repeat rw [add_succ]
rw [hd]
rfl
```

## Level 3

```lean
induction b with d hd
rw[zero_add, add_zero]
rfl
rw[add_succ, succ_add, hd]
rfl
```

## Level 4

```lean
induction b with d hd
rw [zero_add, add_zero]
rfl
rw [add_succ, succ_add]
rw [succ_add, add_succ]
rw[hd]
rfl
```

## Level 5

```lean
rw [add_assoc]
rw [add_comm b]
rw [← add_assoc]
rfl
```
