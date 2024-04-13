// Find: কোনো শর্ত একাধিক জন fulfill করলেও সে প্রথম (1st) টাকেই return করবে।

const players = [65, 64, 78, 89, 24, 62];

const selected = players.find(player => player > 63);
console.log(selected); // OP: 65

const selected2 = players.find(player => player > 95);
console.log(selected2);  // OP: undefined