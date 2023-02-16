def nthPrime(index):
    
    isPrime = [];
    MAX = 1000000;
    for i in range(0, MAX):
        isPrime.append(True);
   

    idx = 2;

    while (idx * idx < MAX):
        if (isPrime[idx]):
            for i in range(idx * idx, MAX, idx):
                isPrime[i] = False;
        idx += 1;

    isPrime.pop(0);
    isPrime.pop(1);

    nums = [];

    for i in range(2, len(isPrime)):
        if (isPrime[i-2]):
            nums.append(i);

    return nums[index-1];
        

def main():
    print(nthPrime(20210));

main();



