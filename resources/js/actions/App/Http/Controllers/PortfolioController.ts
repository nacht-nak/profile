import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::index
 * @see app/Http/Controllers/PortfolioController.php:9
 * @route '/'
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
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
    const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: about.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
        aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::about
 * @see app/Http/Controllers/PortfolioController.php:14
 * @route '/about'
 */
        aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    about.form = aboutForm
/**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
export const skills = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skills.url(options),
    method: 'get',
})

skills.definition = {
    methods: ["get","head"],
    url: '/skills',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
skills.url = (options?: RouteQueryOptions) => {
    return skills.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
skills.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skills.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
skills.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: skills.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
    const skillsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: skills.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
        skillsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: skills.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::skills
 * @see app/Http/Controllers/PortfolioController.php:21
 * @route '/skills'
 */
        skillsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: skills.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    skills.form = skillsForm
/**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
export const certifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certifications.url(options),
    method: 'get',
})

certifications.definition = {
    methods: ["get","head"],
    url: '/certifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
certifications.url = (options?: RouteQueryOptions) => {
    return certifications.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
certifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certifications.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
certifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: certifications.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
    const certificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: certifications.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
        certificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certifications.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::certifications
 * @see app/Http/Controllers/PortfolioController.php:28
 * @route '/certifications'
 */
        certificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    certifications.form = certificationsForm
/**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
    const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projects.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
        projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::projects
 * @see app/Http/Controllers/PortfolioController.php:35
 * @route '/projects'
 */
        projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projects.form = projectsForm
/**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
    const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
        contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortfolioController::contact
 * @see app/Http/Controllers/PortfolioController.php:42
 * @route '/contact'
 */
        contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact.form = contactForm
/**
* @see \App\Http\Controllers\PortfolioController::sendMessage
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
export const sendMessage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

sendMessage.definition = {
    methods: ["post"],
    url: '/message',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::sendMessage
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
sendMessage.url = (options?: RouteQueryOptions) => {
    return sendMessage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::sendMessage
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
sendMessage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::sendMessage
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
    const sendMessageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendMessage.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::sendMessage
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
        sendMessageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendMessage.url(options),
            method: 'post',
        })
    
    sendMessage.form = sendMessageForm
const PortfolioController = { index, about, skills, certifications, projects, contact, sendMessage }

export default PortfolioController