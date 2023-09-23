const start = 7.5;
const end = 24;

for(let i = start, counter = 1; i<end; i+=0.5 , counter++){
    const isHalfHour = i - Math.floor(i) === 0.5;
    const floorHrVal = Math.floor(i);
    const ceilHrVal = Math.ceil(i);
    const begining = isHalfHour ? `${floorHrVal}:30` : `${floorHrVal}`;
    const end = isHalfHour ? `${ceilHrVal}` : `${floorHrVal}:30`;
    
    console.log(`- ${begining}-${end} | p${counter} | `);
}