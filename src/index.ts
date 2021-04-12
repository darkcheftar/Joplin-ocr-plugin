// Import the Joplin API
import joplin from 'api';
joplin.plugins.register({

	onStart: async function() {
		
	const resources = await joplin.data.get(["resources"]);
	console.log(resources);
	const image = await joplin.data.get(["resources", resources[0].id,"file"], { fields: ['id','title','mime','created_time','updated_time','user_created_time','user_updated_time','file_extension','encryption_cipher_text','encryption_applied','encryption_blob_encrypted','size', 'is_shared',] });
	console.log(image);
	// tesseract.Tesseract
    // .recognize(image.body)
    // .progress(console.log)
    // .then((res: any) => {
    //     console.log(res);
    // })
    // .catch(console.error);
	}

});
// 