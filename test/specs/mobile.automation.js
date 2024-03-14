describe('Open Application',() => {
    it('should open apps', async() => {        
        await $("//android.view.View[@resource-id='com.fghilmany.dietmealapp:id/view']").click();
    })
})