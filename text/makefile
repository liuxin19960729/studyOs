tishi:=
debug:=-g
# debug+=00000
objects:=main.o  test1.o
liuxin: $(objects)
	$(tishi)gcc  $(debug)	-o	  $@  $^

main.o: main.c  test1.h
	$(tishi)@gcc $(debug) -c  -o $@ $^
test1.o: test1.c   
	$(tishi)@gcc $(debug) -c  -o $@  $^

clear:
	$(tishi)rm -rf liuxin  $(objects)