import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Child } from "../../models/child/child.model";

@Injectable()
export class ChildListService {

    constructor(private db: AngularFireDatabase) { }
    
    private childListRef = this.db.list<Child>('child');

    getChild() {
        return this.childListRef;
    }

    addChild(child: Child) {
        return this.childListRef.push(child);
    }

    editChild(child: Child) {
        return this.childListRef.update(child.key, child);
    }

    removeChild(child: Child) {
        return this.childListRef.remove(child.key);
    }
}