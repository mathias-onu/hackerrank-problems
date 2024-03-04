interface User {
    id: string,
    username: string,
    email: string,
    createdAt: string,
}

interface OnInit {
    ngOnInit(): void
}

class SignInComponent implements OnInit {
    user!: User
    
    ngOnInit(): void {
        
    }
}
