
external fun require(module: String):dynamic

data class Person(var name: String, var email: String)

fun main(args: Array<String>) {

    val express = require("express")
    val app = express()

    app.get("/api/test", {
        _, res ->
        val person = Person("Rehan", "mkodekar@zoho.com")
        res.type("application/json")
        res.send(person)
        
    })

    app.listen("9000", {
        println("listening to port 9000")
    })
}