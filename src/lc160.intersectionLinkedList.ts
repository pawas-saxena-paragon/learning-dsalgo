// https://leetcode.com/problems/intersection-of-two-linked-lists/?envType=study-plan-v2&envId=top-100-liked
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const list1Set = new Set();
    let ptr  = headA;
    while(ptr !== null){
        list1Set.add(ptr);
        ptr = ptr.next;
    }

    ptr = headB;
    while(ptr !== null){
        if(list1Set.has(ptr)){
            return ptr;
        }
        else{
            ptr = ptr.next;
        }
    }

    return null;
  
};