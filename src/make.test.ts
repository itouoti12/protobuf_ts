import { protoBase64 } from "@bufbuild/protobuf";
import { User } from "gen/example_pb";

it('protocolBufferへエンコード', () => {

    // make protocol buffer
    const user = new User({
        firstName: "Homer",
        lastName: "Simpson",
        active: true,
        locations: ["Springfield"],
        projects: { SPP: "Springfield Power Plant" },
        manager: {
          firstName: "Montgomery",
          lastName: "Burns",
        },
    }); 
    const bytes = user.toBinary();
    const userFromBytes = User.fromBinary(bytes);
    const userFromJson = User.fromJsonString('{"firstName": "Homer", "lastName": "Simpson"}');

    console.log('### to Binary');
    console.log(bytes);

    console.log('### to Base64');
    const base64 = protoBase64.enc(bytes);
    console.log(base64);

    console.log('### to JSON');
    console.log(user.toJson());

    expect(user.toJson()).toEqual(userFromBytes.toJson());
    expect(new User({firstName:"Homer", lastName:"Simpson"}).toJson()).toEqual(userFromJson.toJson());
    


    
});