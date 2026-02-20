/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
    if(typeof password !== "string") return "weak";
    if(password.trim().length === 0) return "weak";
    function uppercase(password){
      for(let i = 0; i<password.length; i++){
        if (password[i] >= 'A' && password[i] <= 'Z') {
          return true;
        } 
      }
      return false;
    }
    function lowercase(password){
      for(let i = 0; i<password.length; i++){
        if (password[i] >= 'a' && password[i] <= 'z') {
          return true;
        }
      }
      return false;
    }
    function hasnumber(password){
      for(let i = 0; i<password.length; i++){
           if(password[i] >= 0 && password[i] <=9){
            return true;
          }
      }
      return false;
    }
    function hassymbol(password){
      for(let i = 0; i<password.length; i++){
        let char = password[i];
        if(!(char >= 'A' && char <= 'Z')&&
           !(char >= 'a' && char <= 'z')&&
           !(char >= '0'   && char <=  '9')){
            return true;
           }
      }
      return false;
    }
    let criteriacount = 0;
    if(password.length >= 8) criteriacount++;
    if(uppercase(password)) criteriacount++;
    if(lowercase(password)) criteriacount++;
    if(hasnumber(password)) criteriacount++;
    if(hassymbol(password)) criteriacount++;

    if(criteriacount <= 1) return "weak";
    if(criteriacount <= 3) return "medium";
    if(criteriacount <= 4) return "strong";
    if(criteriacount <= 5) return "very strong";
}
