def json_error(msg):
    import json
    return json.dumps({"error": msg})


def json_success(msg):
    import json
    return json.dumps({"success": msg})
