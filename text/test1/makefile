debug:=-g
objects:=main.o test.o
main: $(objects)
	gcc $(debug) -o $@  $^
main.o: main.c
	gcc -c  $< -o $@ 
test.o: test.c	test.h
	gcc -c $^ -o $@ 

.PHONY:clean
clean: 
	rm -rf $(objects) main 
	