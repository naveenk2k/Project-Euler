/* Read 'Restricted part size or number of parts' from https://en.wikipedia.org/wiki/Partition_(number_theory)

By taking conjugates, the number pk(n) of partitions of n into exactly k parts is equal to the number of partitions of n in which the largest part has size k.[13] The function pk(n) satisfies the recurrence

pk(n) = pk(n − k) + pk−1(n − 1)
with initial values p0(0) = 1 and pk(n) = 0 if n ≤ 0 or k ≤ 0. This recurrence is correct because pk(n − k) counts the partitions of n where the smallest part is greater than 1 (remove k 1's and add them to each partition) and pk−1(n − 1) counts the partitions where the smallest part is 1. One recovers the function p(n) by

{\displaystyle p(n)=\sum _{k=1}^{n}p_{k}(n).} {\displaystyle p(n)=\sum _{k=1}^{n}p_{k}(n).}
*/