import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/experiences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExperienceController::index
 * @see app/Http/Controllers/Admin/ExperienceController.php:14
 * @route '/admin/experiences'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/experiences/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExperienceController::create
 * @see app/Http/Controllers/Admin/ExperienceController.php:24
 * @route '/admin/experiences/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\ExperienceController::store
 * @see app/Http/Controllers/Admin/ExperienceController.php:32
 * @route '/admin/experiences'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/experiences',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::store
 * @see app/Http/Controllers/Admin/ExperienceController.php:32
 * @route '/admin/experiences'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::store
 * @see app/Http/Controllers/Admin/ExperienceController.php:32
 * @route '/admin/experiences'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::store
 * @see app/Http/Controllers/Admin/ExperienceController.php:32
 * @route '/admin/experiences'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::store
 * @see app/Http/Controllers/Admin/ExperienceController.php:32
 * @route '/admin/experiences'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
export const show = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/experiences/{experience}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
show.url = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return show.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
show.get = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
show.head = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
    const showForm = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
        showForm.get = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExperienceController::show
 * @see app/Http/Controllers/Admin/ExperienceController.php:50
 * @route '/admin/experiences/{experience}'
 */
        showForm.head = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
export const edit = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/experiences/{experience}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
edit.url = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return edit.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
edit.get = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
edit.head = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
    const editForm = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
        editForm.get = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExperienceController::edit
 * @see app/Http/Controllers/Admin/ExperienceController.php:58
 * @route '/admin/experiences/{experience}/edit'
 */
        editForm.head = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
export const update = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/experiences/{experience}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
update.url = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return update.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
update.put = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
update.patch = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
    const updateForm = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
        updateForm.put = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\ExperienceController::update
 * @see app/Http/Controllers/Admin/ExperienceController.php:68
 * @route '/admin/experiences/{experience}'
 */
        updateForm.patch = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ExperienceController::destroy
 * @see app/Http/Controllers/Admin/ExperienceController.php:86
 * @route '/admin/experiences/{experience}'
 */
export const destroy = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/experiences/{experience}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ExperienceController::destroy
 * @see app/Http/Controllers/Admin/ExperienceController.php:86
 * @route '/admin/experiences/{experience}'
 */
destroy.url = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return destroy.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExperienceController::destroy
 * @see app/Http/Controllers/Admin/ExperienceController.php:86
 * @route '/admin/experiences/{experience}'
 */
destroy.delete = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ExperienceController::destroy
 * @see app/Http/Controllers/Admin/ExperienceController.php:86
 * @route '/admin/experiences/{experience}'
 */
    const destroyForm = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExperienceController::destroy
 * @see app/Http/Controllers/Admin/ExperienceController.php:86
 * @route '/admin/experiences/{experience}'
 */
        destroyForm.delete = (args: { experience: number | { id: number } } | [experience: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const experiences = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default experiences