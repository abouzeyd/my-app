import React from "react"

const SignIn = () => {
    return (
        <div className="input">
            <div >
                <label htmlFor="email">email:</label>
            <input type="email" name={""} />
            </div>
            <div style={{ml:12}}>
                <label htmlFor="passWord">PassWord:</label>
            <input type="email" name={""} />
            </div>
             
        </div>
    )
}
export default SignIn;