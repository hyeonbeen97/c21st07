class OsMemory {
    constructor(id) {
        this.id = id;
        this.os = require("os");
        this.fs = require("fs");
    }

    makeJson() {
        let memjson = `{ "use": "${(this.os.freemem() / 1024).toFixed()}KB", "total": "${(this.os.totalmem() / 1024).toFixed()}KB" }`
        this.fs.writeFile('./writemem.json', memjson, (err) => {
            if (err) {
                throw err;
            }
            this.fs.readFile('./writemem.json', (err, data) => {
                if (err) {
                    throw err;
                }
                console.log(data.toString());
            })
        })
    }
    intervalMem() {
        setInterval(() => {
            this.makeJson();
        }, 2000)
    }
    run() {
        this.intervalMem();
        this.canvas()
    }

}
const om = new OsMemory("om");
om.run();
