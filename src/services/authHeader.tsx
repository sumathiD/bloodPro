export const authHeader = () => {
  
    if (localStorage.getItem('user')) {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
    } else
        return {};

}
