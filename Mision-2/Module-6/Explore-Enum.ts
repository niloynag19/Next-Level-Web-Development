

type UserRole = "admin" | "Editor" | "user";

enum UserRole1 {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}

const obj = (role: UserRole1) => {
    if (role === UserRole1.Admin || role === UserRole1.Editor) {
        return true;
    }
    else {
        return false;
    }
}

console.log(obj(UserRole1.Admin));