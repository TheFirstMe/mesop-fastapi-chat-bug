import mesop.labs as mel


@mel.web_component(path="./test.js")
def test_component():
    mel.insert_web_component(name="test-component")
